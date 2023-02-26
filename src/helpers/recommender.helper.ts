/**
 * Returns the value at <x> of a sigmoid function f shifted such that
 * f(0) = n
 * @param x 
 * @param n 
 * @returns output of the shifted sigmoid function
 */
const shiftedSigmoid = (x: number, n: number): number => {
    return 1 / (1 + Math.pow(Math.E, -x + Math.log((1/n) -1)))
}

/**
 * Update the state <settings> by adjusting each category according to whether
 * <category> was picked or rejected
 * @param category the key in <settings> to adjust
 * @param isPicked determines whether <category> was chosen or rejected
 * @param settings state of settings
 * @param setSettings function to update <settings>
 */
export const updateRecommender = (
    category: string,
    isPicked: boolean,
    settings: Object,
    setSettings: (string) => void
): void => {
    if (category) {
        let config = settings['preferenceConfig'] || {}
        const prob = config[category]
        const new_prob = shiftedSigmoid(prob, prob)
        const n = Object.keys(config).length
        const delta = new_prob - prob
    
        // if <category> was picked, increase its probability and decrease the
        // others according to a sigmoid curve and vice versa if <category> was
        // rejected
        for (const [k, v] of Object.entries(config)) {
            if (k === category) {
                if (isPicked) {
                    config[k] = new_prob
                } else {
                    config[k] = prob - Math.abs(delta)
                }
            } else {
                if (isPicked) {
                    config[k] = v as number - (delta / (n - 1))
                } else {
                    config[k] = v as number + (delta / (n - 1))
                }
                
            }
        }
        
        setSettings({ ...settings, preferenceConfig: config })
    }
}