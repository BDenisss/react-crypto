import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
    const wordContainerRef = useRef(null);

    useEffect(() => {
        if (wordContainerRef.current) {
            const wordContainerEl = wordContainerRef.current;
            const word = wordContainerEl.getAttribute('data-word');
            const wordRepeatTimes = wordContainerEl.getAttribute('data-word-repeat');
            const textColorsArray = wordContainerEl.getAttribute('data-text-colors').split(',');

            for (let i = 0; i < wordRepeatTimes; i++) {
                const wordEl = document.createElement('span');
                wordEl.className = 'word';
                wordEl.style.setProperty('--word-index', i);
                wordEl.style.setProperty('--color', textColorsArray[i]);
                for (let j = 0; j < word.length; j++) {
                    const charEl = document.createElement('span');
                    charEl.className = 'char';
                    charEl.style.setProperty('--char-index', j);
                    charEl.innerHTML = word[j];
                    wordEl.appendChild(charEl);
                }
                wordContainerEl.appendChild(wordEl);
            }
        }
    }, []);

    return (
        <div className="header">
            <h1 className="title">Crypto tracker</h1>
        </div>
    );
};

export default Header;
