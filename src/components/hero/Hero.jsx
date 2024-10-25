import React from "react";
import { useRef, useState } from "react";
import "./hero.scss";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		videoRef.current.play();
		setIsPlaying(true);
	};
	return (
		<section className='hero'>
			<div className='container'>
				<h2 className='title'>Заголовок в одну или две строки</h2>
				<div className='hero_video'>
					<video
						width='100%'
						height='auto'
						ref={videoRef}
						controls={isPlaying}
						onPlay={handlePlay}
						poster='./images/hero_video_poster.png'
					>
						<source
							src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
							type='video/mp4'
						/>
					</video>
					{!isPlaying && (
						<button className='play_button' onClick={handlePlay}>
							<Image
								src={"./images/play_arrow.svg"}
								width={21}
								height={27}
								layout='intrinsic'
							/>
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default Hero;
