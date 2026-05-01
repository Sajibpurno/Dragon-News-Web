import { redirect } from 'next/navigation';
import React from 'react';

const Home = () => {
  redirect(`/category/${'01'}`);
};

export default Home;