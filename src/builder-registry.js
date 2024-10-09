"use client";
import { builder, Builder } from "@builder.io/react";

// Components
import CheckList from "./components/CheckList/CheckList";
import Header from "./components/Header/Header";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import ImageWithList from "./components/ImageWithList/ImageWithList";
import InformativeStrip from "./components/InformativeStrip/InformativeStrip";
import InteractiveListWithImage from "./components/InteractiveListWithImage/InteractiveListWithImage";
import MasonryGallery from "./components/MasonryGallery/MasonryGallery";
import TestimonialBlock from "./components/TestimonialBlock/TestimonialBlock";
import CTABlock from "./components/CTABlock/CTABlock";
import Footer from "./components/Footer/Footer";

// Common components
import CTAButton from "./components/common/CTAButton/CTAButton";
import SideBySide from "./components/common/SideBySideContainer/SideBySideContainer";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// Registering Menu Items
Builder.register('insertMenu', {
  name: 'Page Layout',
  priority: 1,
  items: [
    { name: 'Header' },
    { name: 'Footer' },
  ],
})

Builder.register('insertMenu', {
  name: 'Containers',
  priority: 2,
  items: [
    { name: 'SideBySideContainer' },
  ],
})

Builder.register('insertMenu', {
  name: 'Composed Components',
  priority: 3,
  items: [
    { name: 'HeroCarousel' },
    { name: 'InformativeStrip' },
    { name: 'ImageWithList' },
    { name: 'InteractiveListWithImage' },
    { name: 'CTABlock' },
    { name: 'TestimonialBlock' },
  ],
})

Builder.register('insertMenu', {
  name: 'Common Components',
  priority: 4,
  items: [
    { name: 'CTAButton' },
    { name: 'MasonryGallery' },
    { name: 'CheckList' },
  ],
})
///

// Registering Components
Builder.registerComponent(Header, {
  name: "Header",
  image: "https://cdn-icons-png.flaticon.com/512/3596/3596219.png",
  inputs: [
    {
      name: "logo",
      type: "file",
      required: false,
      friendlyName: "Logo",
      localized: true, 
    },
    {
      name: "menuItems",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
          required: false,
          friendlyName: "Name",
          localized: true, 
        },
        {
          name: "link",
          type: "string",
          required: false,
          friendlyName: "Link",
          localized: true, 
        },
        {
          name: "hasDropdown",
          type: "boolean",
          friendlyName: "Has Dropdown Menu?",
        },
        {
          name: "dropdownList",
          type: "list",
          friendlyName: "Dropdown List Items",
          subFields: [
            { name: "name", type: "string", required: false, localized: true },
            { name: "link", type: "string", required: false, localized: true },
          ],
        },
        {
          name: "dropdownImages",
          type: "list",
          friendlyName: "Dropdown Images",
          subFields: [
            { name: "src", type: "file", required: false },
            { name: "alt", type: "string", required: false, localized: true },
            { name: "link", type: "string", required: false, localized: true },
            { name: "name", type: "string", required: false, localized: true },
          ],
        },
      ],
    },
    {
      name: "cta",
      type: "string",
      required: false,
      friendlyName: "Call to Action",
      localized: true, 
    },
  ],
});


Builder.registerComponent(Footer, {
  image: "https://cdn-icons-png.flaticon.com/512/3596/3596193.png",
  name: "Footer"
});

Builder.registerComponent(HeroCarousel, {
  name: "HeroCarousel",
  image: "https://cdn-icons-png.flaticon.com/512/7167/7167425.png",
  inputs: [
    {
      name: "slides",
      type: "list",
      subFields: [
        { name: "backgroundImage", type: "file", required: false },
        { name: "title", type: "string", required: false },
        { name: "subtitle", type: "string", required: false },
        { name: "description", type: "string", required: false },
        { name: "cta1", type: "string", required: false },
        { name: "cta2", type: "string", required: false },
      ],
    },
  ],
});

Builder.registerComponent(InformativeStrip, {
  name: "InformativeStrip",
  image: "https://cdn-icons-png.flaticon.com/512/471/471662.png",
  inputs: [
    {
      name: "info",
      type: "list",
      subFields: [
        { name: "icon", type: "file", required: false },
        { name: "info", type: "string", required: false },
      ],
    },
  ],
});

Builder.registerComponent(ImageWithList, {
  name: "ImageWithList",
  image: "https://cdn-icons-png.flaticon.com/512/7168/7168076.png",
  inputs: [
    { name: "image", type: "file", required: false },
    { name: "title", type: "string", required: false },
    { name: "subtitle", type: "string", required: false },
    {
      name: "list",
      type: "list",
      subFields: [
        { name: "title", type: "string", required: false },
        { name: "text", type: "string", required: false },
      ],
    },
  ],
});

Builder.registerComponent(CheckList, {
  name: "CheckList",
  image: "https://cdn-icons-png.flaticon.com/512/5973/5973481.png",
  inputs: [
    { name: "title", type: "string", required: false },
    { name: "subtitle", type: "string", required: false },
    {
      name: "list",
      type: "list",
      subFields: [
        { name: "title", type: "string", required: false },
        { name: "text", type: "string", required: false },
      ],
    },
  ],
});

Builder.registerComponent(InteractiveListWithImage, {
  name: "InteractiveListWithImage",
  image: "https://cdn-icons-png.flaticon.com/512/12586/12586373.png",
  inputs: [
    { name: "title", type: "string", required: false },
    { name: "subtitle", type: "string", required: false },
    { name: "text", type: "string", required: false },
    {
      name: "list",
      type: "list",
      subFields: [
        { name: "icon", type: "file", required: false },
        { name: "itemName", type: "string", required: false },
        { name: "link", type: "string", required: false },
        { name: "image", type: "file", required: false },
      ],
    },
  ],
});


// Common components
Builder.registerComponent(CTAButton, {
  name: "CTAButton",
  image: "https://cdn-icons-png.flaticon.com/512/4067/4067570.png",
  inputs: [
    { name: "text", type: "string", required: false },
    { name: "link", type: "string", required: false },
  ],
});

Builder.registerComponent(MasonryGallery, {
  name: "MasonryGallery",
  image: "https://cdn-icons-png.flaticon.com/512/11334/11334662.png",
  inputs: [
    { name: "title", type: "string", required: false },
    { name: "subtitle", type: "string", required: false },
    {
      name: "images",
      type: "list",
      subFields: [
        { name: "src", type: "file", required: false },
        { name: "alt", type: "string" },
      ],
    },
    { name: "ctaText", type: "string", required: false },
  ],
});

Builder.registerComponent(TestimonialBlock, {
  name: "TestimonialBlock",
  image: "https://cdn-icons-png.flaticon.com/512/2190/2190548.png",
  inputs: [
    {
      name: "testimonials",
      type: "list",
      subFields: [
        { name: "backgroundImage", type: "file", required: false },
        { name: "review", type: "string", required: false },
        { name: "starsCount", type: "number", required: false },
        { name: "reviewDescription", type: "string", required: false },
        { name: "reviewerName", type: "string", required: false },
        { name: "reviewerLocation", type: "string", required: false },
      ],
    },
  ],
});

Builder.registerComponent(CTABlock, {
  name: "CTABlock",
  image: "https://cdn-icons-png.flaticon.com/512/3316/3316250.png",
  inputs: [
    { name: "ctaHook", type: "string", required: false },
    { name: "ctaDetails", type: "string", required: false },
    {
      name: "ctaButton",
      type: "object",
      subFields: [
        { name: "text", type: "string", required: false },
        { name: "link", type: "string", required: false },
      ],
    },
  ],
});

Builder.registerComponent(SideBySide, {
  name: 'SideBySideContainer',
  image: "https://cdn-icons-png.flaticon.com/512/43/43482.png",
  canHaveChildren: true,
  inputs: [
    {
      name: 'left',
      type: 'uiBlocks',
      hideFromUI: true,
      defaultValue: [],
    },
    {
      name: 'right',
      type: 'uiBlocks',
      hideFromUI: true,
      defaultValue: [],
    },
  ],
});
///