import React, {CSSProperties, lazy} from 'react'

type DefaultExportType<T> = {
    default: T
}

const loadWithDelay = <T extends React.ComponentType<any>>(importFunc: () => Promise<DefaultExportType<T>>) =>
    new Promise<DefaultExportType<T>>((resolve) => {
        setTimeout(() => {
            importFunc().then(resolve)
        }, 255)
    })

export const lazyWithDelay = <T extends React.ComponentType<any>>(importFunc: () => Promise<DefaultExportType<T>>) =>
    lazy(() => loadWithDelay(importFunc))

export const loader_style: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50vh',
    marginBottom: '60vh',
    width: '80%',
    borderRadius: '100px'
}

export const loader_container_style: CSSProperties = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

export const loader_text_style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: '-45vh',
    fontFamily: 'monospace',
    fontSize: '24px',
    color: '#42b40b'
}

export const title = 'FIShop |'
