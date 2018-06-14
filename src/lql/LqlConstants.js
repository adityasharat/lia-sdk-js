export const LIQL_SETTING = {
  'article': {
    'src': 'messages',
    'whereClauses': [
      {
        'clause': 'in',
        'key': 'conversation.style',
        'value': '(\'forum\', \'blog\')',
        'operator': 'AND'
      },
      {
        'clause': 'equals',
        'key': 'depth',
        'value': '##',
        'operator': 'or'
      }
    ],
    'ordering': {
      'key': 'conversation.last_post_time',
      'type': 'desc'
    },
    'limit': '50'
  },
  'test': {
    'src': 'test',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'target.type',
        'value': '\'test\'',
        'operator': 'AND'
      }
    ],
    'limit': '25'
  },
  'node': {
    'src': 'nodes',
    'whereClauses': [
      {
        'clause': 'in',
        'key': 'conversation_style',
        'value': '(\'forum\', \'blog\')',
        'operator': 'AND'
      },
      {
        'clause': 'equals',
        'key': 'parent.id',
        'value': '\'##\'',
        'operator': 'and'
      }
    ],
    'limit': '25'
  },
  'node_depth': {
    'src': 'nodes',
    'whereClauses': [
      {
        'clause': 'in',
        'key': 'conversation_style',
        'value': '(\'forum\', \'blog\')',
        'operator': 'AND'
      },
      {
        'clause': 'equals',
        'key': 'depth',
        'value': '##',
        'operator': 'or'
      }
    ],
    'limit': '25'
  },
  'search': {
    'src': 'messages',
    'whereClauses': [
      {
        'clause': 'matches',
        'key': 'body',
        'value': '\'##\'',
        'operator': 'OR'
      },
      {
        'clause': 'matches',
        'key': 'subject',
        'value': '\'##\'',
        'operator': 'OR'
      },
      {
        'clause': 'matches',
        'key': 'tags.text',
        'value': '\'##\'',
        'operator': 'OR'
      },
      {
        'clause': 'matches',
        'key': 'labels.text',
        'value': '\'##\'',
        'operator': 'AND'
      },
      {
        'clause': 'in',
        'key': 'conversation.style',
        'value': '(\'forum\', \'blog\')',
        'operator': 'OR'
      },
      {
        'clause': 'equals',
        'key': 'depth',
        'value': '0',
        'operator': 'and'
      }
    ],
    'ordering': {
      'key': 'conversation.last_post_time',
      'type': 'desc'
    },
    'limit': '25'
  },
  'subscription': {
    'src': 'subscriptions',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'target.type',
        'value': '\'message\'',
        'operator': 'AND'
      }
    ],
    'limit': '25'
  },
  'message_children': {
    'src': 'messages',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'topic.id',
        'value': '\'##\'',
        'operator': 'or'
      }
    ],
    'ordering': {
      'key': 'post_time',
      'type': 'asc'
    }
  },
  'questions': {
    'src': 'messages',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'author.id',
        'value': '\'##\'',
        'operator': 'and'
      },
      {
        'clause': 'equals',
        'key': 'depth',
        'value': '&&',
        'operator': 'and'
      }
    ],
    'ordering': {
      'key': 'conversation.last_post_time',
      'type': 'desc'
    }
  },
  'category': {
    'src': 'nodes',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'node_type',
        'value': '\'category\'',
        'operator': 'or'
      }
    ]
  },
  'article_browse': {
    'src': 'messages',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'board.id',
        'value': '\'##\'',
        'operator': 'AND'
      },
      {
        'clause': 'equals',
        'key': 'depth',
        'value': '&&',
        'operator': 'or'
      }
    ],
    'ordering': {
      'key': 'conversation.last_post_time',
      'type': 'desc'
    },
    'limit': '25'
  },
  'message': {
    'src': 'messages',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'id',
        'value': '\'##\'',
        'operator': 'AND'
      }
    ]
  },
  'user': {
    'src': 'users',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'id',
        'value': '\'##\'',
        'operator': 'or'
      }
    ]
  },
  'messages_by_ids': {
    'src': 'messages',
    'whereClauses': [
      {
        'clause': 'in',
        'key': 'id',
        'value': '(##)',
        'operator': 'or'
      }
    ]
  },
  'floated_message': {
    'src': 'floated_message',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'message.board.id',
        'value': '\'##\'',
        'operator': 'AND'
      },
      {
        'clause': 'equals',
        'key': 'scope',
        'value': '\'&&\'',
        'operator': 'or'
      }
    ]
  },
  'app_sdk_setting': {
    'src': 'app_sdk_settings',
    'whereClauses': [
      {
        'clause': 'equals',
        'key': 'client_id',
        'value': '\'##\'',
        'operator': 'or'
      }
    ]
  }
};

export const LIQL = {
  MESSAGE_LIST: 'SELECT id, target.author, target.id, target.subject, target.post_time, target.kudos.sum(weight), target.body, ' +
                'target.conversation.style, target.conversation.solved, target.conversation.last_post_time FROM subscriptions'
};
