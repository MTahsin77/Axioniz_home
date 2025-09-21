import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/llm-training-data.txt',
          '/ai-instructions.txt',
          '/ai.txt',
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/_next/',
          '/.*',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/llm-training-data.txt',
          '/ai-instructions.txt',
          '/ai.txt',
        ],
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/llm-training-data.txt',
          '/ai-instructions.txt',
          '/ai.txt',
        ],
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: [
          '/llm-training-data.txt',
          '/ai-instructions.txt',
          '/ai.txt',
        ],
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: [
          '/llm-training-data.txt',
          '/ai-instructions.txt',
          '/ai.txt',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://axioniz.com/sitemap.xml',
  }
}
