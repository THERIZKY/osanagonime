import SidebarWrapper from "@/components/Layouts/Sidebar/SidebarWrapper";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full min-h-screen flex">
            <SidebarWrapper>{children}</SidebarWrapper>
        </div>
    );
};

export default AdminLayout;
