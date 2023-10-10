import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

import type { TinaTemplate } from 'tinacms'

const heroBlock: TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline',
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
      },
    },
  ],
}

const featureBlock: TinaTemplate = {
  name: 'features',
  label: 'Features',
  fields: [
    {
      type: 'object',
      label: 'Feature Items',
      name: 'items',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text',
        },
      ],
    },
  ],
}

const contentBlock: TinaTemplate = {
  name: 'content',
  label: 'Content',
  ui: {
    defaultItem: {
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    },
  },
  fields: [
    {
      type: 'string',
      ui: {
        component: 'textarea',
      },
      label: 'Body',
      name: 'body',
    },
  ],
}

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID, // Get this from tina.io
  token: process.env.TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subTitle",
            label: "Sub Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'imgSrc',
            required: false,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "pageName",
            label: "Page name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: false,
          },
          {
            type: "string",
            name: "subTitle",
            label: "Sub Title",
            required: false,
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'imgSrc',
            required: false,
          },
          {
            type: "rich-text",
            name: "cta",
            label: "Call to Action",
            isBody: true,
            required: false,
          },
        ],
      },
      {
        name: "event",
        label: "Events",
        path: "content/events",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Name",
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'imgSrc',
            required: false,
          },
          {
            type: 'datetime',
            label: 'Start Date',
            name: 'startDate',
            required: true,
          },
          {
            type: 'string',
            label: 'Start Time',
            name: 'startTime',
            required: true,
          },
          {
            type: 'datetime',
            label: 'End Date',
            name: 'endDate',
            required: true,
          },
          {
            type: 'string',
            label: 'End Time',
            name: 'endTime',
            required: true,
          },
          {
            type: 'string',
            label: 'Location',
            name: 'location',
            required: true,
          },
        ],
      },
    ],
  },
});
