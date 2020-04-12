import dynamic from 'next/dynamic';

const CMS = dynamic(() => import('netlify-cms'), {ssr: false});

//CMS is a react component. no registry available.

export default CMS;