import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Head>
        <title>About - Celebrity Zodiac</title>
      </Head>


      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Welcome to Celebrity Zodiac, your ultimate source for discovering the zodiac signs of your favorite celebrities! Our mission is to provide fans with a fun and engaging way to learn more about the astrological signs of the stars they admire.
          </p>
          <p className="mb-4">
            Whether you're curious about the traits of your favorite actor, singer, or athlete, or just looking for some astrological fun, we have got you covered. Our comprehensive database is constantly updated to ensure you have the most accurate and up-to-date information.
          </p>
          <p className="mb-4">
            At Celebrity Zodiac, we believe that astrology can offer fascinating insights into the personalities and behaviors of people, including celebrities. Our team is passionate about astrology and pop culture, and we're excited to share our knowledge with you.
          </p>
          <p className="mb-4">
            Thank you for visiting our site. We hope you enjoy exploring the astrological signs of the stars as much as we do!
          </p>
          <p className="font-bold">- The Celebrity Zodiac Team</p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          &copy; 2024 Celebrity Zodiac. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
