import {ReactNode} from 'react';
import {Helmet} from 'react-helmet-async';
import Header from './app/header/header';
import {AuthorizationStatus} from '../const';

type PageProps = {
  title: string;
  children: ReactNode | ReactNode[];
  className: string;
  isAuthorizedUser: AuthorizationStatus;
}

function Page({title, children, className, isAuthorizedUser}: PageProps) {
  return (
    <div className={className}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header isAuthorizedUser={isAuthorizedUser === AuthorizationStatus.Auth} />
      {children}
    </div>
  );
}

export default Page;
