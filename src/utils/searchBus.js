import Vue from 'vue'

export const SearchBus = new Vue()

export const SearchState = {
    searchKeyword: '',
    matchedItems: [],
    activeHighlightId: null,
    
    setSearchKeyword(keyword) {
        this.searchKeyword = keyword
        SearchBus.$emit('search:keywordChanged', keyword)
    },
    
    setMatchedItems(items) {
        this.matchedItems = items
        SearchBus.$emit('search:matchedItemsChanged', items)
        
        if (items.length > 0) {
            this.setActiveHighlightId(items[0].id)
        } else {
            this.clearAllHighlights()
        }
    },
    
    setActiveHighlightId(id) {
        this.activeHighlightId = id
        SearchBus.$emit('search:activeHighlightChanged', id)
    },
    
    clearAllHighlights() {
        this.activeHighlightId = null
        this.matchedItems = []
        this.searchKeyword = ''
        SearchBus.$emit('search:clearAll')
    },
    
    navigateToMatchedItem(item) {
        if (item && item.hasRoute && item.route) {
            SearchBus.$emit('search:navigate', item)
            return item.route
        }
        return null
    }
}

export default SearchBus
