import type { PageServerLoad } from "./$types";
import type { Song } from "$lib/types/Song";
import { error, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url, fetch }) => {
	console.log("----------------");
	console.log(url.searchParams.get("page"));

	const pageParam = url.searchParams.get("page");
	if (!pageParam) {
		throw redirect(301, "/music?page=1");
	}

	console.log(pageParam);

	const page = parseInt(pageParam);

	if (Number.isNaN(page) || page <= 0) {
		throw redirect(301, "/music?page=1");
	}

	const limit = 25;
	const offset = (page - 1) * 25;
	console.log(offset);
	console.log(page);
	const response = await fetch(`http://localhost:8080/v1/songs?offset=${offset}&limit=${limit}`);
	const songs: Song[] = await response.json();

	const total = intHeader(response, "Pagination-Total");
	const count = intHeader(response, "Pagination-Count");

	console.log(`http://localhost:8080/v1/songs?offset=${offset}&limit=${limit}`);
	console.log(total);
	console.log(limit);
	console.log(total / limit);
	console.log(Math.ceil(total / limit));
	console.log(Math.floor(total / limit));
	console.log(count);

	if (total >= 0 && count === 0) {
		// if the selected page is too large to get any results, redirect to the last page

		throw redirect(301, `/music?page=${Math.ceil(total / limit)}`);
	}

	return {
		songs: songs,
		total: total,
		count: count,
		limit: limit,
		offset: offset,
		page: page
	};
};

function intHeader(response: Response, header: string) {
	const headerString = response.headers.get(header);

	if (!headerString) {
		throw error(500, {
			message: `Api header '${header}' is missing.`
		});
	}
	const integerHeader = parseInt(headerString);
	if (Number.isNaN(integerHeader)) {
		throw error(500, {
			message: `Api header '${header}' is not a number.`
		});
	}

	return integerHeader;
}
