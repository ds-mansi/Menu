import { useAnswersState } from '@yext/answers-headless-react';
import { useContext } from 'react';
import { render } from 'react-dom';
import { ResponsiveContext } from '../../App';
import { useComposedCssClasses } from '../../hooks/useComposedCssClasses';
import { CardProps } from '../../models/cardComponent';


//prettier-ignore
export interface TrainerCardConfig {
  showOrdinal?: boolean
}

//prettier-ignore
export interface TrainerCardProps extends CardProps {
  configuration: TrainerCardConfig
}

//prettier-ignore
export interface SimpleImage {
  url: string,
  width: number,
  height: number
}

//prettier-ignore
export interface Image extends SimpleImage {
  sourceUrl: string,
  thumbnails: SimpleImage[]
}

//prettier-ignore
interface PrimaryPhoto {
  image?: Image
}

//prettier-ignore
export interface TrainerData {
  id: any | null | undefined;
  answer: string | undefined;
  name?: string,
  c_description?: string,
  c_inspirationalQuote?: string,
  Photo?: PrimaryPhoto,
  primaryPhoto?:any,
  ctaButtonText?: string,
  c_orderNow?:any,
}

//prettier-ignore
export interface TrainerCardCssClasses {
  container?: string,
  descriptionContainer?: string,
  name?: string,
  c_description?: string,
  // TODO: why can't I use the tailwind pixels here
  trainerPhoto?: string,
  ctaButton?: string,
  Photo?: PrimaryPhoto,
  ctaButtonText?: string,
  c_orderNow?:any,
  primaryPhoto?:any,
}

//prettier-ignore
const builtInCssClasses: TrainerCardCssClasses = {
  container: 'flex flex-col p-4 shadow-sm my-2 align-items-center',
  descriptionContainer: 'w-full text-sm font-heading ',
  name: 'text-xl font-medium font-body font-bold',
  ctaButton: 'flex border rounded-md mt-4 px-4 bg-black justify-center hover:bg-orange-900',
  ctaButtonText: 'font-heading text-black font-bold text-base px-3 py-3 sm:py-0',
};

// TODO: format hours, hours to middle, fake CTAs on the right, hours to show current status and then can be expanded, limit to 3 results for now, margin between map
export function MenuCard(props: TrainerCardProps): JSX.Element {
  const { result } = props;
  const trainer = result.rawData as unknown as TrainerData;
  const trainerImg = trainer.primaryPhoto?.image?.url ?? '';
  //console.log("object",trainerImg)
  // const smallestThumbnail = trainer.logo?.image?.thumbnails[trainer.logo?.image?.thumbnails.length - 1].url

  const screenSize = useContext(ResponsiveContext);

  const cssClasses = useComposedCssClasses(builtInCssClasses);

  function renderName(name?: string) {
    return <div className={cssClasses.name}>{name}</div>;
  }

  function renderDescription(c_description?: string) {
    return <div className={cssClasses.c_description}>{c_description}</div>;
  }

  //console.log("trainer",trainer.primaryPhoto)
  const isVertical = useAnswersState((s) => s.meta.searchType) === 'vertical';

  return (

<>
    <section className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" >
        <div className=" border-2 border-indigo-600 pt-4 pb-4 pl-4 pr-4 text-center ">
            <div className="rounded overflow-hidden shadow-lg">
                <img src={trainerImg}/>
            </div>
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                {renderName(trainer.name)}
            
            </div>
            <div>
              <p className="text-gray-700 text-base">
                {renderDescription(trainer.c_description)}
              </p>
            </div>
            </div>
            <div>
            
            <button className="bg-purple-500 hover:bg-violet-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">
                <a href='https://pizzaonline.dominos.co.in/?src=affiliate_DangleAds_354&utm_source=affiliate&utm_medium=DangleAds&utm_campaign=354&gclid=CjwKCAiAoL6eBhA3EiwAXDom5j8YSufPJJN88QDu9tqQaRjX2sQNCX8DmtXMLFSIDRyE9b19bRX0ABoCiEgQAvD_BwE'>{"OrderNow"}</a>
              </button>
            </div>
            
        </div>
    </section>
</>
  );
}
