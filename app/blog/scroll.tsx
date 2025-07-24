'use client'
import { useRef, useState, useEffect } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Links from './Links'
import { titles } from '../../utils/title'
export default function Scroll() {

    const [title, setTitle] = useState('');
    const [scroll, setScroll] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1);
    const divRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if (divRef.current) {
            setScroll(divRef.current.scrollLeft);
        }
    };
    const handleMaxScroll = () => {
        if (divRef.current) {
            const differentMaxScroll =
                divRef.current.scrollWidth - divRef.current.clientWidth;
            setMaxScroll(Math.max(differentMaxScroll - 1, 0));
        }
    };
    const prev = () => {
        if (divRef.current) {
            divRef.current.scrollLeft -= 300;
            handleScroll();
        }
    };
    const next = () => {
        if (divRef.current) {
            divRef.current.scrollLeft += 300;
            handleScroll();
        }
    };
    useEffect(() => {
        const node = divRef.current;
        if (!node) return;

        const onScroll = () => {
            handleScroll();
            handleMaxScroll();
        };
          handleScroll();       
          handleMaxScroll();
          const onResize = () => handleMaxScroll();
          window.addEventListener("resize", onResize);
          node.addEventListener("scroll", onScroll);

        return () => {
            node.removeEventListener("scroll", onScroll); 
        };
    }, []);
    return (
        <div
            className="relative flex items-center justify-center py-2 dark:bg-slate-800 bg-slate-200 rounded-md "
        >
            {scroll > 0 && (
                <div
                    className=" left-0 z-40 flex  w-16 cursor-pointer 
                 items-center justify-center bg-linear-to-l  from-transparent to-black text-gray-900"
                    onClick={prev}
                >
                    <ArrowLeftIcon
                        id="prev_slider"
                        className="top-1/2 rounded-full text-white hover:bg-gray-600"
                    />
                </div>
            )}
            <div
                id="page"
                ref={divRef}
                className=" scroll-bar flex overflow-x-scroll scroll-smooth "
            >
                {titles.map((t, i) => (
                    <Links key={t.id + i} link={t.title} setTitle={setTitle}/>
                ))}
            </div>
            {scroll < maxScroll && (
                <div
                    className=" hover:grad absolute right-0 z-30 flex  w-16
                   cursor-pointer items-center  justify-center bg-linear-to-l  from-black to-transparent text-gray-900"
                    onClick={next}
                >
                    <ArrowRightIcon
                        id="next_slider"
                        className="top-1/2 rounded-full text-[30px] text-white hover:bg-gray-600"
                    />
                </div>
            )}
        </div>
    )
}