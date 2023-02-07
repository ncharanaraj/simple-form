import React from 'react'

export default function YoutubeForm() {
  return (
    <div>
        <form>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' />

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' />

            <label htmlFor='channel'>Channel</label>
            <input id='channel' type='text' name='channel' />

            <button>Submit</button>
        </form>
    </div>
  )
}
