'use client'

import React from 'react'
import { MoonIcon } from '@heroicons/react/24/solid'
import { SunIcon } from '@heroicons/react/24/outline'
import { useThemeMode } from '@/hooks/useThemeMode'
export interface SwitchDarkModeProps {
	className?: string
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({ className = '' }) => {
	const { _toogleDarkMode, isDarkMode, toDark, toLight } = useThemeMode()

	return (
		<button
			onClick={_toogleDarkMode}
			className={`flex h-12 w-12 items-center justify-center self-center rounded-full text-2xl text-neutral-700 hover:bg-neutral-100 focus:outline-none md:text-3xl dark:text-neutral-300 dark:hover:bg-neutral-800 ${className}`}
		>
			<span className="sr-only">Enable dark mode</span>
			{isDarkMode ? (
				<svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
						className="fill-sky-400/20"
					></path>
					<path
						d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
						className="fill-gray-300"
					></path>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
						className="fill-gray-300"
					></path>
				</svg>
			) : (
				<SunIcon className="h-7 w-7" aria-hidden="true" />
			)}
		</button>
	)
}

export default SwitchDarkMode