// Step 1 create feature
class CPU {
    setSeries(series) {
        throw new Error("Not implemented");
    }
}
class Memory {    
    setCapacityInGB(capacity) {
        throw new Error("Not implemented");
    }
}
class Display {    
    setResolution(resolution) {
        throw new Error("Not implemented");
    }
}

// Step 2 extend feature to device
//CP
class PhoneCPU extends CPU {
    setSeries(series) {
        console.log(`[PHONE] ${series}`);
    }    
}
class LaptopCPU extends CPU {
    setSeries(series) {
        console.log(`[LAPTOP] ${series}`);
    }    
}
class TabletCPU extends CPU {
    setSeries(series) {
        console.log(`[TABLET] ${series}`);
    }    
}
//Memory
class PhoneMemory extends Memory {
    setCapacityInGB(capacity) {
        console.log(`[PHONE] ${capacity}`);
    }    
}
class LaptopMemory extends Memory {
    setCapacityInGB(capacity) {
        console.log(`[LAPTOP] ${capacity}`);
    }    
}
class TabletMemory extends Memory {
    setCapacityInGB(capacity) {
        console.log(`[TABLET] ${capacity}`);
    }    
}
// Resolution
class PhoneResolution extends Display{
    setResolution(resolution) {
        console.log(`[PHONE] ${resolution}`);
    }    
}
class LaptopResolution extends Display{
    setResolution(resolution) {
        console.log(`[LAPTOP] ${resolution}`);
    }    
}
class TabletResolution extends Display{
    setResolution(resolution) {
        console.log(`[TABLET] ${resolution}`);
    }    
}

//Step 3  create factory device
class DeviceFactory {
    createCPU() {
        throw new Error('Method not implemented!');
    }
    createMemory() {
        throw new Error('Method not implemented!');
    }
    createDisplay() {
        throw new Error('Method not implemented!');
    }
}

class PhoneDeviceFactory extends DeviceFactory {
    createCPU() {
        return new PhoneCPU();
    }
    createMemory() {
        return new PhoneMemory();
    }
    createDisplay() {
        return new PhoneResolution();
    }
}
class LaptopDeviceFactory extends DeviceFactory {
    createCPU() {
        return new LaptopCPU();
    }
    createMemory() {
        return new LaptopMemory();
    }
    createDisplay() {
        return new LaptopResolution();
    }
}
class TabletDeviceFactory extends DeviceFactory {
    createCPU() {
        return new TabletCPU();
    }
    createMemory() {
        return new TabletMemory();
    }
    createDisplay() {
        return new TabletResolution();
    }
}

function appAbstractFactory({factory, cpuSeries, capacity, resolution}) {    
    if (!factory) {
        console.log('---No factory provided ---');
        return '---No factory provided ---'
    }

    const cpu = factory.createCPU();
    const memory = factory.createMemory();
    const display = factory.createDisplay();

    cpu.setSeries(cpuSeries);
    memory.setCapacityInGB(capacity);
    display.setResolution(resolution)
}

function createFactory(deviceTyoe) {
    const devices = {
        'phone': PhoneDeviceFactory,
        'laptop': LaptopDeviceFactory,
        'tablet': TabletDeviceFactory
    }
    const Devices = devices[deviceTyoe];
    return new Devices();
}

appAbstractFactory({
    factory: createFactory('phone'),
    cpuSeries: 'Snapdragon 690',
    capacity: 16,
    resolution: '2560x1440',
})
appAbstractFactory({
    factory: createFactory('laptop'),
    cpuSeries: 'Intel Core i9',
    capacity: 500,
    resolution: '1920x1080',
})
appAbstractFactory({
    factory: createFactory('tablet'),
    cpuSeries: 'ARM Cortex-A53',
    capacity: 64,
    resolution: '1280x720',
})