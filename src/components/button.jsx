import styleCss from '@/plugins/styleCss';

export default {
	data: {
		count: 0,
	},
	view({ attrs }) {
		const { data, setup, onclick } = attrs;
		/* Style - CSS */
		const style = styleCss();
		if (setup) {
			if (setup.color) {
				style.add('background-color', setup.color);
			}
			if (setup['text-color']) {
				style.add('color', setup['text-color']);
			}
		}
		/* Click - Method */
		return (
			<button onclick={onclick} style={style.css}>
				count is: {data.count}
			</button>
		);
	},
};
