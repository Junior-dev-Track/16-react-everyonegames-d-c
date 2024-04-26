import React from "react";
import "../assets/styles/aside.scss";

const categories = [
	{ href: "#", text: "Home" },
	{ href: "#", text: "Reviews" },
	{
		href: "#",
		text: "New releases",
		subItems: [
			{ href: "#", text: "Last 30 days" },
			{ href: "#", text: "This week" },
			{ href: "#", text: "Next week" },
			{ href: "#", text: "Release calendar" },
		],
	},
	{
		href: "#",
		text: "Top",
		subItems: [
			{ href: "#", text: "Best of the year" },
			{ href: "#", text: "Popular in 2023" },
			{ href: "#", text: "All time top 250" },
		],
	},
	{ href: "#", text: "All Games" },
	{
		href: "#",
		text: "Browse",
		subItems: [
			{ href: "#", text: "Platforms" },
			{ href: "#", text: "Store" },
			{ href: "#", text: "Collections" },
			{ href: "#", text: "Reviews" },
			{ href: "#", text: "Genres" },
			{ href: "#", text: "Creators" },
			{ href: "#", text: "Tags" },
			{ href: "#", text: "Developers" },
			{ href: "#", text: "Publishers" },
		],
	},
	{
		href: "#",
		text: "Platforms",
		subItems: [
			{ href: "#", text: "PC" },
			{ href: "#", text: "Playstatin 4" },
			{ href: "#", text: "Xbox One" },
			{ href: "#", text: "Ninendo Switch" },
			{ href: "#", text: "iOS" },
			{ href: "#", text: "Android" },
		],
	},
	{
		href: "#",
		text: "Genres",
		subItems: [
			{ href: "#", text: "Free Online Games" },
			{ href: "#", text: "Action" },
			{ href: "#", text: "Strategy" },
			{ href: "#", text: "RPG" },
			{ href: "#", text: "Shooter" },
			{ href: "#", text: "Adventure" },
			{ href: "#", text: "Puzzle" },
			{ href: "#", text: "Racing" },
			{ href: "#", text: "Sports" },
		],
	},
];

function NestedList({ items }) {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>
					{item.subItems ? (
						<>
							<a href={item.href}>{item.text}</a>
							<NestedList items={item.subItems} />
						</>
					) : (
						<a href={item.href}>{item.text}</a>
					)}
				</li>
			))}
		</ul>
	);
}

function Aside() {
	return (
		<aside className="aside">
			<nav>
				<NestedList items={categories} />
			</nav>
		</aside>
	);
}

export default Aside;
