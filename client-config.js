// import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

export default {
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || 'iu140zyi',
    dataset: process.env.SANITY_DATASET || 'production',
  },
};
