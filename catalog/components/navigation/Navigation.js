import React from 'react'
import PageHeader from '../../lib/pageHeader'
import Markdown from '../../lib/markdown'
import Modals from '../../zendesk/modals/modals'
import defaultMenu from './default/html/default.md'

const Navigation = () => {
    return (
        <React.Fragment>
            <PageHeader title={'Navigation'} />
                <Markdown source={defaultMenu} />
        </React.Fragment>
    )
}

export default Navigation
