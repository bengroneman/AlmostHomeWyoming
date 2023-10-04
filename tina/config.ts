import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

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
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
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
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: false,
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
