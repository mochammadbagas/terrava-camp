import { PublicMainLayoutProps } from '@/types';
import PublicMainLayout from './public/public-main-layout';

export default function PublicLayout({ children }: PublicMainLayoutProps) {
    return <PublicMainLayout>{children}</PublicMainLayout>;
}
