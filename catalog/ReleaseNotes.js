import React, { Fragment } from 'react'
import PageHeader from './lib/pageHeader'

const ReleaseNotes = () => {
  return (
    <Fragment>
      <PageHeader title='Releasenotes' />
      <div style={styles}>
        <section className='p-2 vf-border-top-gray-200'></section>
        <h3>v.7.19.0</h3>

        <h4>Dropdown updated</h4>
        <p>Adjusted dropdown component with updated guidelines.</p>

        <h4>Scrollable Tabs</h4>
        <p>New Fixed and Scrollable Tab-bar for mobile.</p>

        <h4>Visual Pickers</h4>
        <p>New component for selection, assets and guidelines.</p>

        <h4>InCharge Specific</h4>
        <p>
          Completely New logotypes for InCharge Nordic, Icons, Colours, and
          Buttons now added as assets and with guidelines.
        </p>

        <section className='p-2 vf-border-top-gray-200'></section>

        <h3>v.7.18.0</h3>

        <h4>Icons, class-name</h4>
        <p>
          Updated and made clarifications regarding icons on the components
          page. (Rules for sizing, small, medium, large will be implemented in
          an upcoming release).
        </p>

        <h4>New Spinner</h4>
        <p>Component and Guidelines for new Spinner.</p>

        <h4>Main Navigation</h4>
        <p>
          Component and Guidelines for Navigation: Desktop, Tablet and Mobile.
        </p>

        <h4>Button Group </h4>
        <p>
          Adjusted Button group with updated guidelines and a version for mobile
          usage.
        </p>

        <h4>New Input fields, Alternative with Label.</h4>
        <p>
          New set of input fields now with Label above. (Rules for sizing,
          small, medium, large will be implemented in an upcoming release).
        </p>

        <h4>User reported Bugs</h4>
        <p>
          Bad syntax in developer intro fixed. Adjusted typography for H1, H2,
          H3 etc for better overall usage. Adjusted Gutter size for Mobile and
          Tablet.
        </p>

        <section className='p-2 vf-border-top-gray-200'></section>

        <h3>v.7.17.0</h3>

        <h4>Upload Component</h4>
        <p>Updated Component and guidelines for the upload asset.</p>

      </div>
    </Fragment>
  )
}
const styles = {
  marginLeft: '40px',
}

export default ReleaseNotes
