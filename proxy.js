const myObject={
    name:'John',
    age:30
};

const handler={
    get(target,property){
        console.log(`Getting property ${property}`);
        return target[property];
    },
    set(target,property,value){
        console.log(`Setting property ${property} to ${value}`);
    }
};

const myProxy=new Proxy(myObject,handler);

console.log(myProxy.name);


// real case use(without proxy)
export const legacyFontSizes = {
    extraLarge:gignatic, //deprecated
    extraSmall:tiny,
};

export const fontSizes = {
    gignatic:gignatic,
    tiny:tiny,
    large:large,
    small:small,
}

export default {
    ...legacyFontSizes,
    ...fontSizes
}


const procyFontSizes = new Proxy(fontSizes, proxiedFontSizesHandler);

const proxiedFontSizesHandler = {
    get(target,property){
        if(property in target){
            return target[property];
        }else{
            console.warn(`Property ${property} does not exist in fontSizes`);
            return undefined;
        }   
    }
};

console.log(procyFontSizes.extraLarge); // Logs a warning and returns undefined
console.log(procyFontSizes.large); // Returns the value of large without any warning