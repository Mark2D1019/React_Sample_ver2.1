//ホーム画面を作成

import { memo, VFC } from "react";
import { Outlet } from "react-router-dom";

export const Home: VFC = memo(() => {
	return (
		<div>
			<p>ホーム画面です。</p>
			{/* <Outlet /> */}
		</div>
	);
});
