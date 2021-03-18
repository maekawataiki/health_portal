import elasticsearch from '@elastic/elasticsearch'

// Connect to elasticsearch
export const elasticClient = new elasticsearch.Client({ node: 'http://localhost:9200' });