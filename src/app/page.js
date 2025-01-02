import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import React from "react";

export default function Home() {
	return (
		<>
			<title>Japanese Internment Camps</title>
			<div className={styles.title}>
				<a href="https://humanrights.ca/story/japanese-canadian-internment-and-struggle-redress">
					Canadian Museum for Human Rights
				</a>
				<br></br>
				<a href="https://www.leg.bc.ca/learn/discover-your-legislature/1939-to-1945-world-war-ii-and-the-japanese-internment">
					Legislative Assembly of British Columbia
				</a>
				<br></br>
				<a href="https://www.thecanadianencyclopedia.ca/en/article/japanese-internment-banished-and-beyond-tears-feature">
					The Canadian Encyclopedia
				</a>
				<p className={styles.jic}>Japanese Internment Camps</p>
				<p className={styles.author}>By Eden Sobol</p>
			</div>
			<div className={styles.happened}>
				<p className={styles.happenedTitle}>What Happened?</p>
				<p className={styles.happenedText}>
					In 1942, after some building of tensions between the Japanese Canadians and the English
					Canadians, and Pearl Harbour, the Government of Canada allowed for the removal of anybody
					in the highly Japanese-populated portions of Canada, under the War Measures Act. This
					meant 90% of Japanese Canadians were removed, and sent to camps with worse quality of life
					than the average prison. All of their property and belongings were stolen and sold in
					order to pay for it. After the war ended, they were given a choice to be deported to
					Japan, or be released east of the Rocky Mountains. This is now recognized as one of the
					worst human rights violations in Canada's history, and many of the Japanese died due to
					starvation or poor conditions.
				</p>
			</div>
			<div className={styles.change}>
				<p className={styles.changeTitle}>Did It Cause Change?</p>
				<p className={styles.changeText}>
					This caused immense change, as many people now recognise the signs of racism, and we now
					know better than to group and punish people by irrelevant qualities. It is now recognized
					that collective punishment is a war crime, and thus it is unlikely to happen again.
				</p>
			</div>
			<div className={styles.long}>
				<p className={styles.longTitle}>Has It Had a Longstanding Impact?</p>
				<p className={styles.longText}>
					This had a long-lasting impact on culture and war in Canada. This caused racism against
					the Japanese to grow, and racism takes a long time to die down. Even today some people
					have prejudice against any Japanese. As well, due to the fact that collective punishment
					is a war crime, it hasn't happened since, and likely won't happen again for many years to
					come.
				</p>
			</div>
			<div className={styles.count}>
				<p className={styles.countTitle}>How Many Did It Impact?</p>
				<p className={styles.countText}>
					Over 21 000 people from B.C. were taken from their homes, and families were split apart.
					Even once they returned to "normal" life, they had no belongings to return to, as they
					were stolen and auctioned or sold for low prices. As a result of this, racism against the
					Japanese had grown, and in day-to-day life this was very noticeable.
				</p>
			</div>

			<div className={styles.citations}>
				<Link href="/citations">Citations</Link>
			</div>
		</>
	);
}
