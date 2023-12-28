import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import Quiz from '@/components/content/blog/Quiz';
import GithubCard from '@/components/content/card/GithubCard';
import { Pre } from '@/components/content/Pre';
import SplitImage, { Split } from '@/components/content/SplitImage';
import TweetCard from '@/components/content/TweetCard';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';
import NextImage from "@/components/images/NextImage";
import InstagramEmbed from "@/components/content/InstagramEmbed";
import CodePenEmbed from "@/components/content/CodePenEmbed";

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  // code: CustomCode,
  LiteYouTubeEmbed,
  SplitImage,
  Split,
  TechIcons,
  TweetCard,
  GithubCard,
  Quiz,
  NextImage,
  InstagramEmbed,
  CodePenEmbed,
};

export default MDXComponents;
