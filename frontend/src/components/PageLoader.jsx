import React from 'react';
import { LoaderIcon } from 'lucide-react';

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderIcon className="size-100 animate-spin" />
    </div>
  );
}

export default PageLoader;
