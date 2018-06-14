import * as RestClient from './RestClient';

const FIELDS_BOARD_MESSAGES = [
  'id', 'subject', 'view_href', 'board.id', 'post_time', 'kudos.sum(weight)',
  'conversation.style', 'conversation.solved', 'conversation.last_post_time',
  'user_context', 'author', 'author.id', 'author.avatar', 'author.rank',
  'author.login', 'author.href', 'author.email', 'parent.id', 'metrics',
  'replies.count(*)'
];

const FIELDS_TOPIC_MESSAGES = [
  'id', 'body', 'subject', 'conversation.solved', 'view_href', 'post_time', 'kudos.sum(weight)',
  'can_accept_solution', 'is_solution', 'user_context.kudo', 'user_context.can_kudo',
  'user_context.can_reply', 'user_context.can_delete', 'user_context.read', 'author',
  'author.id', 'author.href', 'author.email', ' author.avatar', 'author.rank',
  'author.login', 'parent.id', 'metrics', 'replies.count(*)'
];

const ApiClient = (() => {
  let client;
  let sdk;
  let base;

  class ApiClient {

    constructor(_sdk, _client) {
      sdk = _sdk;
      client = _client;
      base = `/${sdk.credentials.tenantId}/api/2.0`;
    }

    login({ code, params = {}, headers = {} }) {
      return client.post(`${base}/auth/accessToken`, {
        code,
        'client_id': sdk.credentials.clientId,
        'client_secret': sdk.credentials.clientSecret,
        'grant_type': 'authorization_code',
        'redirect_uri': sdk.credentials.redirectUrl
      });
    }

    search({ query, params = {}, headers = {} } = {}) {
      return client.get(`${base}/search`, {
        params: {
          q: query,
          ...params
        },
        headers
      });
    }

    user({ params, headers } = {}) {
      return this.search({
        query: 'SELECT email, href, last_visit_time, login, id, view_href, rank, avatar from users WHERE id = \'self\'',
        params,
        headers
      });
    }

    categories({params, headers} = {}) {
      return this.search({
        query: 'select id, title, depth from nodes WHERE node_type = \'category\'',
        params,
        headers
      });
    }

    boards({
      parent,
      fields = ['id', 'title', 'depth'],
      styles = ['forum', 'blog'],
      params = {},
      headers = {}
    } = {}) {
      let query;

      if (parent) {
        query = `select ${fields.join(', ')} from nodes WHERE conversation_style in ('${styles.join('\, \'')}') AND parent.id = '${parent}'`;
      } else {
        query = `select ${fields.join(', ')} from nodes WHERE conversation_style in ('${styles.join('\', \'')}') AND depth = 1 LIMIT 50`;
      }

      return this.search({
        query,
        params,
        headers
      });
    }

    messages({
      board = null,
      fields = FIELDS_BOARD_MESSAGES,
      params = {},
      headers = {}
    }) {

      if (typeof board !== 'string') {
        throw new Error('ERROR: A board id is required.');
      } else {
        board = board.split(':')[1];
      }

      return this.search({
        query: `SELECT ${fields.join(', ')} FROM messages WHERE board.id = '${board}' AND depth = 0 ORDER BY conversation.last_post_time desc LIMIT 50`,
        params,
        headers
      });
    }

    topic({
      topic = null,
      fields = FIELDS_TOPIC_MESSAGES,
      params = {},
      headers = {}
    }) {

      if (typeof topic !== 'string') {
        throw new Error('ERROR: A topic id is required.');
      }

      return this.search({
        query: `SELECT ${fields.join(', ')} FROM messages WHERE topic.id = '${topic}' ORDER BY post_time asc LIMIT 50`,
        params,
        headers
      });
    }
  }

  return ApiClient;
})();

export function build(sdk) {
  const client = RestClient.build(sdk);
  const instance = new ApiClient(sdk, client);

  Object.freeze(instance);
  return instance;
};
