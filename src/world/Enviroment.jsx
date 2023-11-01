import { Environment } from "@react-three/drei";

export default function Environments() {
	return (
		<>
			<Environment
				files={"/assets/environments/mud_road_puresky_2k.hdr"}
				background={true}
			/>
		</>
	);
}
