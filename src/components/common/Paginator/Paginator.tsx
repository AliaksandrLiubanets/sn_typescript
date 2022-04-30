import React, {memo} from 'react'
import {getPages} from '../../../utils/pagination-calculation'
import s from './Paginator.module.css'

type PaginatorPropsType = {
    // onChangeSetAmountOfItems: (amountOfItems: number) => void
    setCurrentPage: (page: number) => void
    itemsTotalCount: number
    page: number
    pageSize: number
}

const itemsPerPage = [10, 20, 30]

export const Paginator = memo(({
                                   // onChangeSetAmountOfItems,
                                   setCurrentPage,
                                   itemsTotalCount,
                                   page,
                                   pageSize
                               }: PaginatorPropsType) => {
    const pagesCount = Math.ceil(itemsTotalCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i)
    }

    const pagesForRender = getPages(pages, page, pagesCount)

    const onClickSetCurrentPage = (page: number) => {
        setCurrentPage(page)
    }

    return (
        itemsTotalCount ?
            <div className={s.paginatorContainer}>
                <div className={s.container}>
                    <div className={s.edge}>
                        {page > 3 && pagesCount > 5 && (
                            <>
                                <button onClick={() => onClickSetCurrentPage(page - 1)}>
                                    ◁
                                </button>
                                <button className={page === 1 ? s.selectedPage : ''}
                                        onClick={() => onClickSetCurrentPage(1)}> 1
                                </button>
                                <span>...</span>
                            </>
                        )}
                    </div>
                    <div className={s.center}>
                        {pagesForRender.map(p => (
                            <button className={page === p ? s.selectedPage : ''}
                                    onClick={() => onClickSetCurrentPage(p)}
                                    key={p}> {p} </button>))}
                    </div>
                    <div className={s.edge}>
                        {page < pages.length - 2 && pagesCount > 5 && (
                            <>
                                <span>...</span>
                                <button
                                    className={page === pages.length ? s.selectedPage : ''}
                                    onClick={() => onClickSetCurrentPage(pages.length)}>
                                    {pages.length}
                                </button>
                                <button onClick={() => onClickSetCurrentPage(page + 1)}>
                                    ▷
                                </button>
                            </>
                        )}
                    </div>
                    <div className={s.show}>
                        {/*<span>Show </span>*/}
                        {/*<Select options={itemsPerPage} value={pageSize}*/}
                        {/*    // onChangeOption={onChangeSetAmountOfItems}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
            : <div className={s.emptyAnswer}>Nothing was found</div>
    )
})