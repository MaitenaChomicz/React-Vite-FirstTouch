import React from 'react'
import './CreateRecipe.css'
import './compCR/IngList'
import './compCR/RBuilder'
import './compCR/RSummary'
import IngList from './compCR/IngList'
import RBuilder from './compCR/RBuilder'
import RSummary from './compCR/RSummary'

const CreateRecipe = () => {
  return (
    <>
    <section>
      <div className='crea'>
      <h2 id='section-create'>CreateRecipe</h2>

      </div>

      <div>
        <IngList>

        </IngList>
      </div>

      <div>
        <RBuilder>

        </RBuilder>
      </div>

      <div>
        <RSummary>

        </RSummary>
      </div>

    </section>
    </>
    
  )
}

export default CreateRecipe