import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID, // Get this from tina.io
  token: process.env.TOKEN, // Get this from tina.io
  cmsCallback: cms => {
    cms.flags.set("branch-switcher", true);
    return cms;
  },
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
            type: 'rich-text',
            label: 'Description',
            name: 'description',
            isBody: true,
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
          {
            type: 'string',
            label: 'External Link',
            name: 'externalLink',
            required: false,
          },
        ],
      },
    ],
  },
});
