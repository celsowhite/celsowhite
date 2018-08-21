// Store

export const store = {
    
    // Global State
    
    state: {
        colorScheme: '',
        navIsOpen: false
    },
    
    // Set Site Color Scheme
    
    setColorScheme(theme) {
        this.state.colorScheme = theme;
    },
    
    // Toggle Navigation
    
    toggleNavigation() {
        this.state.navIsOpen = !this.state.navIsOpen;
    }
    
};