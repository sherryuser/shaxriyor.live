import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';
import NextImage from "@/components/images/NextImage";

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description="Explore Shakhriyor Ergashev's coding journey, from starting with a MacBook in 2019 to mastering web development with resources like codewithmosh.com. Discover a passion-driven developer's insights into frontend development, insightful blogs, and impressive projects. Join the learning adventure today!"
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>about</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>shakhriyor ergashev</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <NextImage
                className='float-right ml-6 w-40 md:w-72'
                src='/images/my-img.jpg'
                width='1500'
                height='1695'
                alt='Photo of me'
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hey there! 👋 I'm a passionate software engineer with a story
                  that might sound familiar but comes with its own unique twist.
                  My journey into the world of programming began unexpectedly when
                  I purchased my first MacBook Air 2017 🍎. There was something about that sleek,
                  powerful machine that whispered possibilities into my ear 🌟, and before I knew it, I was hooked 🎣.
                </p>
                <p data-fade='4'>
                  It wasn't just the allure of technology but the magic of creation that drew me in ✨.
                  I started to learn the art of crafting websites with HTML and CSS through the guidance of my
                  first mentor,{' '}<CustomLink href='https://codewithmosh.com'> Mosh Hamedani
                </CustomLink>{' '} 🧑‍🏫. His online courses were a beacon of knowledge that illuminated my path 🔦.
                  The world of Udemy and YouTube further broadened my horizons 🌐, turning me from an
                  enthusiast into a dedicated coder 👨‍💻.
                </p>
                <p data-fade='5'>
                  On this website, you can explore my{' '}<CustomLink href='/blog'>blog</CustomLink> 📝 where I share my insights and experiences
                  in the world of programming, as well as check out my {' '}<CustomLink href='/projects'>projects</CustomLink> 🛠️ to see the tangible
                  results of my coding journey. My code is more than just a job; it's a testament to my
                  dedication to this craft ✍️, and I'm excited to share this passion with you through my work 💖.
                </p>
              </article>
              <h3 className='h4 mt-4' data-fade='6'>
                Educational Milestones
              </h3>
              <article className='prose mt-2 dark:prose-invert' data-fade='7'>
                <ul>
                  <li>
                    <CustomLink href='https://yandex.uz/maps/-/CDeRAAj9'>
                      Samarkand City School
                    </CustomLink>{' '} (High School Degree) 🙇‍♂️ <br/>(2009-2020)
                  </li>
                  <li>
                    <CustomLink href='https://wiut.uz'>
                      Westminster
                    </CustomLink>{' '} International University in Tashkent (Foundation Degree) 🎓 <br/>(2020-2021)
                  </li>
                  <li>
                    <CustomLink href='https://wiut.uz'>
                      Westminster
                    </CustomLink>{' '} International University in Tashkent
                    (BSc Business Information Systems) 👨‍💻<br/>(2021-2024)
                  </li>
                </ul>
              </article>

              <h3 className='h4 mt-4' data-fade='6'>
                Career Highlights
              </h3>
              <article className='prose mt-2 dark:prose-invert' data-fade='7'>
                <ul>
                  <li>
                    I was working as a Junior Software Developer at{' '}
                    <CustomLink href='https://goabroad.study'>
                      Go Abroad & Study
                    </CustomLink>{' '}
                    while remotely based in Tashkent, Uzbekistan.
                  </li>
                  <li>
                    Previously, I gained experience as a Wordpress developer at{' '}
                    <CustomLink href='https://samarkandtours.com'>
                      Samarkand Tours
                    </CustomLink>{' '}
                    from January 2021 to November 2021.
                  </li>
                  <li>
                    In addition, I've served as a logistics recruiter for{' '}
                    <CustomLink href='https://mdtrucking.us/'>
                      MD Trucking
                    </CustomLink>.
                  </li>
                  <li>
                    I also worked as a Social Media Manager at{' '}
                    <CustomLink href='https://automaster.uz'>
                      automaster.uz
                    </CustomLink>{' '}
                    from April 2022 to October 2022.
                  </li>
                  <li>
                    I also have recent experience as a software engineer at{' '}
                    <CustomLink href='https://uzum.uz'>
                      Uzum Market
                    </CustomLink>{' '}
                    from February 2023 to July 2023.
                  </li>
                  <li>
                    Now I'm working on my own project,{' '}
                    <Tooltip
                        tipChildren={
                          <p className='italic'>
                            *<CustomLink href='https://shop.swwap.me'>
                            SWWAP
                          </CustomLink>{' '} is all about digital business cards, making networking and connecting with others easier than ever before{' '}
                          </p>
                        }
                    >
                      <CustomLink href='https://swwap.me'>
                        SWWAP
                      </CustomLink>
                    </Tooltip> where I'm passionate about revolutionizing the way we exchange contact information

                  </li>
                </ul>
              </article>


              <h3 className='mt-12' data-fade='8'>
                Tech Stack
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
              Got questions, ideas, or just want to connect? I'd love to hear from you! (find my email
                in the footer). Alternatively, you can connect with me on social media 😉
              </p>
            </article>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Uses</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                <li>MacBook Air (13" M1 2020, 8GB, 256GB) 💻</li>
                <li>iPhone 15 Pro Max 📱</li>
                <li>iPad 5th Gen 📲</li>
                <li>AirPods 3 🎧</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
