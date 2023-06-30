//include images into your bundle
import React, { useState } from "react";
//create your first component
const Home = () => {

	const [color, setColor] = useState("gray")

	return (
		<div className="container ">
			<div className="  d-flex justify-content-center align-items-center" >
				<div className="  " style={{ height: "200px", width: "30px", backgroundColor: "rgba(10, 0, 5, 0.93)" }} >
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center" >

				<div className=" " style={{
					height: "300px", width: "150px", backgroundColor: "rgba(10, 0, 5, 0.93)",
					borderRadius: "50px 50px 50px 50px"
				}}

				>

					<div className="d-flex justify-content-center align-items-center">
						<div className="rounded-circle mt-2" style={{ height: "90px", width: "90px", backgroundColor: (color === "red" ? "red" : "gray") }}

							onClick={() => {

								setColor((prev) => {

									if (prev != "red") return "red"
									return "gray"

								}
								);

							}



							}

						></div>
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<div className="rounded-circle mt-2" style={{
							height: "90px", width: "90px", backgroundColor: (color === "yellow" ? "yellow" : "gray")

						}} onClick={() => {

							setColor((prev) => {

								if (prev != "yellow") return "yellow"
								return "gray"

							}
							);

						}}></div>
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<div className="rounded-circle mt-2" style={{
							height: "90px", width: "90px",
							backgroundColor: (color === "green" ? "green" : "gray")
						}}

							onClick={() => {

								setColor((prev) => {

									if (prev != "green") return "green"
									return "gray"

								}
								);



							}}>

						</div>

					</div>
				</div>
			</div>
		</div >
	);
};

export default Home;
