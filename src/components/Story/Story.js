import React, { useEffect } from 'react';
import './Story.css';
import Nav from '../Nav/Nav';
import { my_stories } from '../../my-stories';
import Stories, { WithSeeMore } from 'react-insta-stories'

function Story() {
	useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    document.title = "Story"

	return (
		<>
			<Nav />
			<div className="Story">
				<div className="stories">
					<Stories
						loop
						keyboardNavigation
						defaultInterval={8000}
						stories={my_stories}
						onStoryEnd={(s, st) => console.log('story ended', s, st)}
						onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
						onStoryStart={(s, st) => console.log('story started', s, st)}
						storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
					/>
				</div>
			</div>
		</>
	);
}

export default Story;