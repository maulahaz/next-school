import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            {/* LEFT */}
            <div className="w-full lg:w-2/3">
                {/* USER CARD */}
                <div className="flex justify-between gap-4">
                    <UserCard type="staff" />
                    <UserCard type="teacher" />
                    <UserCard type="student" />
                    <UserCard type="parent" />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-1/3">RR RR</div>
        </div>
    )
}

export default AdminPage 