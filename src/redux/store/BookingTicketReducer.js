
const initialState = {
    danhSachGheDangChon: [],
}

const BookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHON_GHE': {
            let danhSachGheDangChon = [...state.danhSachGheDangChon]
            const index = danhSachGheDangChon.findIndex(gheDangChon => gheDangChon.soGhe === action.payload.soGhe);
            if (index !== -1) {
                danhSachGheDangChon.splice(index, 1);
            } else {
                danhSachGheDangChon.push(action.payload);
            }
            state.danhSachGheDangChon = danhSachGheDangChon;
            return { ...state }
        }

        case 'BO_CHON_GHE': {
            const index = state.danhSachGheDangChon.findIndex(gheDangChon => gheDangChon.soGhe === action.payload.soGhe);
            let danhSachGheDangChon = [...state.danhSachGheDangChon]
            danhSachGheDangChon.splice(index, 1);
            state.danhSachGheDangChon = danhSachGheDangChon;
            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default BookingTicketReducer;