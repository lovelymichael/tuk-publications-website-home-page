export const loadImages = (modules)=>{
    return Object.entries(modules)
    .sort(([a], [b])=>{
        const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] || 0);
        const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] || 0);

        return numA - numB;
    })
    .map(([, module]) => module.default);
};