CMS.registerWidget('auto-author-slug', createClass({
    componentDidMount() {
        const user = window.CMS && window.CMS.currentUser && window.CMS.currentUser();
        if (user && user.username) {
            this.props.onChange(user.username.toLowerCase());
        }
    },
    render() {
        return h('input', {
            type: 'text',
            value: this.props.value || '',
            readOnly: true,
            style: {
                backgroundColor: '#f5f5f5',
                border: '1px solid #ccc',
                width: '100%',
                padding: '8px'
            }
        });
    }
}));