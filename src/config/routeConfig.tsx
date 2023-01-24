import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
import LocationsPage from '../pages/LocationsPage'; 
import MenuPage from '../pages/MenuPage';
import PlansPage from '../pages/PlansPage';
import VideoPage from '../pages/VideoPage';
import SwitchPage from '../pages/SwitchPage';

export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  {
    path: '/location',
    page: <LocationsPage verticalKey="locations" />
    
  },
  // {
  //   path: '/plans',
  //   page: <PlansPage verticalKey='cf-plans' />
  // },
  // {
  //   path: '/switch',
  //   page: <SwitchPage verticalKey='switch' />
  // },
  {
    path: '/menu',
    page: <MenuPage verticalKey='menu' />
  },
  {
    path: '/faqs',
    page: <FAQsPage verticalKey='faqs'/>
  },
];
