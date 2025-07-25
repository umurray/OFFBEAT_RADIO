import { GetStaticPropsContext } from 'next'
import { FaustPage, getNextStaticProps } from '@faustwp/core'
import { useRouter } from 'next/router'
import CircleLoading from '@/components/Loading/CircleLoading'
import AvatarDropdown from '@/components/Header/AvatarDropdown'
import Logo from '@/components/Logo/Logo'
import CreateBtn from '@/components/Header/CreateBtn'
import { useEffect } from 'react'
import { NC_SITE_SETTINGS } from '@/contains/site-settings'
import Page404Content from '@/container/404Content'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores/store'
import Link from 'next/link'
import { FolderIcon } from '@heroicons/react/24/outline'
import { Album02Icon } from '@/components/Icons/Icons'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'

const cardBase =
	'flex flex-col items-center justify-center p-8 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 transition-all cursor-pointer bg-white dark:bg-neutral-900 text-center group';
const cardHover =
	'hover:shadow-2xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-neutral-800';
const cardDisabled =
	'bg-gray-100 dark:bg-neutral-800 text-gray-400 cursor-not-allowed opacity-70';

const Page: FaustPage<{}> = (props) => {
	const { isReady, isAuthenticated } = useSelector(
		(state: RootState) => state.viewer.authorizedUser,
	)
	const router = useRouter()

	if (NC_SITE_SETTINGS['submissions-settings']?.enable === false) {
		return <Page404Content />
	}

	useEffect(() => {
		if (isAuthenticated === false) {
			router.replace('/login')
		}
	}, [isAuthenticated])

	if (!isReady) {
		return (
			<div className="container flex items-center justify-center p-5">
				<CircleLoading />
			</div>
		)
	}

	const renderHeader = () => {
		return (
			<div className="relative z-20 w-full lg:mx-auto lg:max-w-7xl lg:px-8">
				<div className="flex h-16 items-center gap-x-4 border-b border-neutral-200 px-4 shadow-sm sm:h-20 sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none dark:border-neutral-600">
					<div className="flex flex-1 gap-4 self-stretch lg:gap-6">
						<div className="relative flex flex-1 items-center">
							<Logo />
						</div>
						<div className="flex items-center gap-x-4 lg:gap-x-6">
							{/* Separator */}
							<div
								className="hidden lg:block lg:h-6 lg:w-px lg:bg-neutral-200 dark:bg-neutral-600"
								aria-hidden="true"
							/>

							{/* Profile dropdown */}
							<div className="flex flex-1 items-center justify-end">
								<CreateBtn className="block" />
								<AvatarDropdown />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<>
			<div className="relative flex h-[100vh] w-full flex-col">
				{renderHeader()}
				<div className="flex flex-1 items-center justify-center px-4 sm:px-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
						<Link href="/submission/album" className={`${cardBase} ${cardHover}`}>
							<Album02Icon className="h-12 w-12 mb-4 transition-colors" style={{ color: 'rgba(var(--c-primary-700), 1)' }} />
							<h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">Submit Album</h3>
							<p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">Create a new album and add tracks to it.</p>
						</Link>
						<div className={`${cardBase} ${cardDisabled}`} tabIndex={-1} aria-disabled="true">
							<MusicalNoteIcon className="h-12 w-12 mb-4" style={{ color: 'rgba(var(--c-primary-700), 0.5)' }} />
							<h3 className="mt-2 text-lg font-semibold text-gray-500 dark:text-neutral-400">Submit Track</h3>
							<p className="mt-1.5 text-sm text-gray-400 dark:text-neutral-500">Coming soon: submit individual tracks to an existing album.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export function getStaticProps(ctx: GetStaticPropsContext) {
	return getNextStaticProps(ctx, {
		Page,
		revalidate: false,
	})
}

export default Page
