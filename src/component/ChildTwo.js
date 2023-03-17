import React from 'react'

const ChildTwo = () => {
    console.log('Child Render')
    return (
        <div>
            ChildTwo Component
        </div>
    )
}

export const MemoizedChildTwo = React.memo(ChildTwo)