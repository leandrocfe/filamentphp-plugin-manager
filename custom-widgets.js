CMS.registerWidget('auto-author-slug', createClass({
    componentDidMount() {
        const trySetUsername = () => {
            const user = window.CMS && window.CMS.currentUser && window.CMS.currentUser();
            if (user && user.username) {
                this.props.onChange(user.username.toLowerCase());
            } else {
                // tenta novamente após um pequeno delay
                setTimeout(trySetUsername, 200);
            }
        };

        trySetUsername();
    },
    render() {
        return h('input', {
            type: 'text',
            value: this.props.value || '',
            readOnly: false,
            style: {
                backgroundColor: '#f5f5f5',
                border: '1px solid #ccc',
                width: '100%',
                padding: '8px'
            }
        });
    }
}));