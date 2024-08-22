/** @format */
import { useState } from "react";
import Spinner from "./components/Spinner";

const App = () => {
	const [
		file,
		setFile,
	] = useState(null);
	const [
		fileInfo,
		setFileInfo,
	] = useState(null);
	const [
		loading,
		setLoading,
	] =
		useState(false);

	const handleFileChange =
		(e) => {
			const selectedFile =
				e.target
					.files[0];
			if (
				selectedFile
			) {
				setFile(
					selectedFile,
				);
			} else {
				setFile(null);
			}
		};

	const handleSubmit =
		(e) => {
			e.preventDefault();
			if (file) {
				setLoading(
					true,
				);
				setTimeout(
					() => {
						setFileInfo({
							name:
								file.name,
							size:
								(
									file.size /
									1024
								).toFixed(
									2,
								) + " KB",
							type:
								file.type,
						});
						setLoading(
							false,
						);
					},
					2000,
				);
			} else {
				setFileInfo(
					null,
				);
				alert(
					"Please upload a file before submitting...",
				);
			}
		};

	return (
		<div className="bg-slate-400 ">
			<div className="top-nav"></div>
			<div className="h-screen items-center flex flex-col gap-5 justify-center">
				<div className="flex gap-5 w-4/5">
					<div
						className="w-4/5"
						onSubmit={
							handleSubmit
						}
					>
						<label
							className="block mb-2 text-md text-green-600 dark:text-green-600 font-bold"
							htmlFor="file_input"
						>
							Upload file
						</label>
						<input
							className="file:border-0 file:bg-transparent file:text-foreground file:text-md file:font-light block w-full text-lg file:text-black py-1 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
							id="large_size"
							type="file"
							onChange={
								handleFileChange
							}
						/>
					</div>

					<button
						type="submit"
						className="bg-green-600 rounded-xl mt-8 px-8 py-2 text-white text-sm"
						onClick={
							handleSubmit
						}
					>
						Upload File
					</button>
				</div>

				<div className="block">
					{loading && (
						<Spinner />
					)}
					{!loading &&
						fileInfo && (
							<div>
								<h3>
									File
									Information:
								</h3>
								<p>
									<strong>
										Name:
									</strong>
									{
										fileInfo.name
									}
								</p>
								<p>
									<strong>
										Size:
									</strong>
									{
										fileInfo.size
									}
								</p>
								<p>
									<strong>
										Type:
									</strong>
									{
										fileInfo.type
									}
								</p>
							</div>
						)}
				</div>
			</div>
		</div>
	);
};

export default App;
