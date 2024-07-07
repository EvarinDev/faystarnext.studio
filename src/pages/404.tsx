import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/404'), {
    ssr: false,
})

export default function Custom404() {
    return (
        <main className="relative h-screen">
            <Scene />
        </main>
    );
}