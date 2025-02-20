import React, { memo, useRef, useState, useEffect } from "react"
import { Flex, Text } from "@chakra-ui/react"
import colors from "../../styles/colors"
import { BsDash } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import ipc from "../../lib/ipc"
import eventListener from "../../lib/eventListener"

interface Props {
	darkMode: boolean
	lang: string
	platform: string
	title: string
}

const Titlebar = memo(({ darkMode, lang, platform, title }: Props) => {
	const [hoveringExit, setHoveringExit] = useState<boolean>(false)
	const currentWindow: string = useRef(window.location.hash.split("#")[1]).current
	const showX: boolean = useRef(currentWindow !== "main").current
	const [isTrayAvailable, setIsTrayAvailable] = useState<boolean>(true)
	const [ignoredFilesModalOpen, setIgnoredFilesModalOpen] = useState<boolean>(false)

	useEffect(() => {
		ipc.trayAvailable().then(setIsTrayAvailable).catch(console.error)

		const ignoredFilesModalOpenListener = eventListener.on("ignoredFilesModalOpen", setIgnoredFilesModalOpen)

		return () => {
			ignoredFilesModalOpenListener.remove()
		}
	}, [])

	return (
		<Flex
			style={{
				// @ts-ignore
				WebkitAppRegion: "drag",
				width: "99.75%",
				backgroundColor:
					(!isTrayAvailable && currentWindow == "main") || (currentWindow == "cloud" && platform == "mac")
						? "transparent"
						: colors(platform, darkMode, "titlebarBackgroundPrimary"),
				paddingTop: 0,
				alignItems: "center",
				justifyContent: "center",
				borderTopLeftRadius: "10px",
				borderTopRightRadius: "10px"
			}}
			zIndex={100001}
			position="fixed"
			height={!isTrayAvailable && currentWindow == "main" ? "30px" : platform == "mac" ? "27px" : "35px"}
		>
			{(platform == "windows" || platform == "linux") && (
				<Flex
					position="fixed"
					top={0}
					right={0}
					flexDirection="row"
					style={{
						// @ts-ignore
						WebkitAppRegion: "no-drag"
					}}
				>
					<Flex
						width="30px"
						height="25px"
						paddingTop="5px"
						paddingBottom="5px"
						paddingRight="5px"
						paddingLeft="5px"
						justifyContent="center"
						alignItems="center"
						cursor="pointer"
						pointerEvents="all"
						marginTop="1px"
						borderTopRightRadius={!showX ? "10px" : "0px"}
						_hover={{
							backgroundColor: colors(
								platform,
								darkMode,
								currentWindow == "main" ? "backgroundSecondary" : "backgroundPrimary"
							)
						}}
						onClick={() => ipc.minimizeWindow(currentWindow, new URLSearchParams(window.location.search).get("id") as string)}
					>
						<BsDash
							size={18}
							color={colors(platform, darkMode, "textPrimary")}
						/>
					</Flex>
					{showX && (
						<Flex
							width="30px"
							height="25px"
							paddingTop="5px"
							paddingBottom="5px"
							paddingRight="5px"
							paddingLeft="5px"
							borderTopRightRadius="10px"
							justifyContent="center"
							cursor="pointer"
							pointerEvents="all"
							alignItems="center"
							backgroundColor={hoveringExit ? "red" : "transparent"}
							onClick={() => {
								if (ignoredFilesModalOpen) {
									eventListener.emit("closeIgnoredFilesModalOpen")

									return
								}

								ipc.closeWindow(currentWindow, new URLSearchParams(window.location.search).get("id") as string)
							}}
							onMouseEnter={() => setHoveringExit(true)}
							onMouseLeave={() => setHoveringExit(false)}
						>
							<IoMdClose
								size={18}
								color={hoveringExit && !darkMode ? "white" : colors(platform, darkMode, "textPrimary")}
							/>
						</Flex>
					)}
				</Flex>
			)}
			<Text
				color={darkMode ? "white" : "gray"}
				userSelect="none"
				fontWeight="bold"
				fontSize={14}
				marginTop="-5px"
			>
				{title}
			</Text>
		</Flex>
	)
})

export default Titlebar
