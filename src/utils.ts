class Utils {
	createStringFromTemplate(template: string, variables: object): string {
		return template.replace(new RegExp("\{([^\{]+)\}", "g"), (_unused, varName) => {
			return variables[varName];
		});
	}

	replaceSpacesByDashes(string: string): string {
		return string.replace(/ /g, "-");
	}

	cleanString(dirtyString: string) {
		return dirtyString
			.replace(/\n/g, "")
			.replace(/\t/g, "");
	}

	// minutes to milliseconds
	minutes(minutes: number) {
		return minutes * 60000;
	}
}

export default new Utils();